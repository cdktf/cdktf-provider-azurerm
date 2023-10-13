# `data_azurerm_public_maintenance_configurations`

Refer to the Terraform Registory for docs: [`data_azurerm_public_maintenance_configurations`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations).

# `dataAzurermPublicMaintenanceConfigurations` Submodule <a name="`dataAzurermPublicMaintenanceConfigurations` Submodule" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPublicMaintenanceConfigurations <a name="DataAzurermPublicMaintenanceConfigurations" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations azurerm_public_maintenance_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  location: str = None,
  recur_every: str = None,
  scope: str = None,
  timeouts: DataAzurermPublicMaintenanceConfigurationsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.recurEvery">recur_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}.

---

##### `recur_every`<sup>Optional</sup> <a name="recur_every" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.recurEvery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#timeouts DataAzurermPublicMaintenanceConfigurations#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery">reset_recur_every</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_recur_every` <a name="reset_recur_every" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery"></a>

```python
def reset_recur_every() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs">configs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput">recur_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery">recur_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs"></a>

```python
configs: DataAzurermPublicMaintenanceConfigurationsConfigsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts"></a>

```python
timeouts: DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `recur_every_input`<sup>Optional</sup> <a name="recur_every_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput"></a>

```python
recur_every_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPublicMaintenanceConfigurationsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `recur_every`<sup>Required</sup> <a name="recur_every" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPublicMaintenanceConfigurationsConfig <a name="DataAzurermPublicMaintenanceConfigurationsConfig" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  location: str = None,
  recur_every: str = None,
  scope: str = None,
  timeouts: DataAzurermPublicMaintenanceConfigurationsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery">recur_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}.

---

##### `recur_every`<sup>Optional</sup> <a name="recur_every" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPublicMaintenanceConfigurationsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#timeouts DataAzurermPublicMaintenanceConfigurations#timeouts}

---

### DataAzurermPublicMaintenanceConfigurationsConfigs <a name="DataAzurermPublicMaintenanceConfigurationsConfigs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs()
```


### DataAzurermPublicMaintenanceConfigurationsTimeouts <a name="DataAzurermPublicMaintenanceConfigurationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPublicMaintenanceConfigurationsConfigsList <a name="DataAzurermPublicMaintenanceConfigurationsConfigsList" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope">maintenance_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery">recur_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maintenance_scope`<sup>Required</sup> <a name="maintenance_scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope"></a>

```python
maintenance_scope: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recur_every`<sup>Required</sup> <a name="recur_every" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermPublicMaintenanceConfigurationsConfigs
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a>

---


### DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_public_maintenance_configurations

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPublicMaintenanceConfigurationsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>]

---



