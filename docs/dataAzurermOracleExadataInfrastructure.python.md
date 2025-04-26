# `dataAzurermOracleExadataInfrastructure` Submodule <a name="`dataAzurermOracleExadataInfrastructure` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleExadataInfrastructure <a name="DataAzurermOracleExadataInfrastructure" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure azurerm_oracle_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure(
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
  timeouts: DataAzurermOracleExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#name DataAzurermOracleExadataInfrastructure#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#resource_group_name DataAzurermOracleExadataInfrastructure#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#id DataAzurermOracleExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#name DataAzurermOracleExadataInfrastructure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#resource_group_name DataAzurermOracleExadataInfrastructure#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#id DataAzurermOracleExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#timeouts DataAzurermOracleExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#read DataAzurermOracleExadataInfrastructure#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.availableStorageSizeInGbs">available_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.estimatedPatchingTime">estimated_patching_time</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList">DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList">DataAzurermOracleExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxDataStorageInTbs">max_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxDbNodeStorageSizeInGbs">max_db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.monthlyStorageServerVersion">monthly_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference">DataAzurermOracleExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.totalStorageSizeInGbs">total_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_storage_size_in_gbs`<sup>Required</sup> <a name="available_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.availableStorageSizeInGbs"></a>

```python
available_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_patching_time`<sup>Required</sup> <a name="estimated_patching_time" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.estimatedPatchingTime"></a>

```python
estimated_patching_time: DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList">DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList</a>

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maintenanceWindow"></a>

```python
maintenance_window: DataAzurermOracleExadataInfrastructureMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList">DataAzurermOracleExadataInfrastructureMaintenanceWindowList</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_in_tbs`<sup>Required</sup> <a name="max_data_storage_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxDataStorageInTbs"></a>

```python
max_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_size_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxDbNodeStorageSizeInGbs"></a>

```python
max_db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `monthly_storage_server_version`<sup>Required</sup> <a name="monthly_storage_server_version" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.monthlyStorageServerVersion"></a>

```python
monthly_storage_server_version: str
```

- *Type:* str

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeouts"></a>

```python
timeouts: DataAzurermOracleExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference">DataAzurermOracleExadataInfrastructureTimeoutsOutputReference</a>

---

##### `total_storage_size_in_gbs`<sup>Required</sup> <a name="total_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.totalStorageSizeInGbs"></a>

```python
total_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOracleExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleExadataInfrastructureConfig <a name="DataAzurermOracleExadataInfrastructureConfig" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig(
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
  timeouts: DataAzurermOracleExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#name DataAzurermOracleExadataInfrastructure#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#resource_group_name DataAzurermOracleExadataInfrastructure#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#id DataAzurermOracleExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#name DataAzurermOracleExadataInfrastructure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#resource_group_name DataAzurermOracleExadataInfrastructure#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#id DataAzurermOracleExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleExadataInfrastructureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#timeouts DataAzurermOracleExadataInfrastructure#timeouts}

---

### DataAzurermOracleExadataInfrastructureEstimatedPatchingTime <a name="DataAzurermOracleExadataInfrastructureEstimatedPatchingTime" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTime.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTime()
```


### DataAzurermOracleExadataInfrastructureMaintenanceWindow <a name="DataAzurermOracleExadataInfrastructureMaintenanceWindow" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindow()
```


### DataAzurermOracleExadataInfrastructureTimeouts <a name="DataAzurermOracleExadataInfrastructureTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#read DataAzurermOracleExadataInfrastructure#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/oracle_exadata_infrastructure#read DataAzurermOracleExadataInfrastructure#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList <a name="DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference <a name="DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimated_db_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimated_network_switches_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimated_storage_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">total_estimated_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTime">DataAzurermOracleExadataInfrastructureEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_db_server_patching_time`<sup>Required</sup> <a name="estimated_db_server_patching_time" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```python
estimated_db_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_network_switches_patching_time`<sup>Required</sup> <a name="estimated_network_switches_patching_time" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```python
estimated_network_switches_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_storage_server_patching_time`<sup>Required</sup> <a name="estimated_storage_server_patching_time" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```python
estimated_storage_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimated_patching_time`<sup>Required</sup> <a name="total_estimated_patching_time" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```python
total_estimated_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleExadataInfrastructureEstimatedPatchingTime
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureEstimatedPatchingTime">DataAzurermOracleExadataInfrastructureEstimatedPatchingTime</a>

---


### DataAzurermOracleExadataInfrastructureMaintenanceWindowList <a name="DataAzurermOracleExadataInfrastructureMaintenanceWindowList" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference <a name="DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutEnabled">custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthlyPatchingEnabled">monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindow">DataAzurermOracleExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_enabled`<sup>Required</sup> <a name="custom_action_timeout_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutEnabled"></a>

```python
custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_patching_enabled`<sup>Required</sup> <a name="monthly_patching_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthlyPatchingEnabled"></a>

```python
monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureMaintenanceWindow">DataAzurermOracleExadataInfrastructureMaintenanceWindow</a>

---


### DataAzurermOracleExadataInfrastructureTimeoutsOutputReference <a name="DataAzurermOracleExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exadata_infrastructure

dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOracleExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleExadataInfrastructure.DataAzurermOracleExadataInfrastructureTimeouts">DataAzurermOracleExadataInfrastructureTimeouts</a>]

---



