# `dataAzurermOracleExascaleDatabaseStorageVault` Submodule <a name="`dataAzurermOracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleExascaleDatabaseStorageVault <a name="DataAzurermOracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault(
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
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermOracleExascaleDatabaseStorageVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#timeouts DataAzurermOracleExascaleDatabaseStorageVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#read DataAzurermOracleExascaleDatabaseStorageVault#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleExascaleDatabaseStorageVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">additional_flash_cache_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference">DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.virtualMachineClusterCount">virtual_machine_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_flash_cache_percentage`<sup>Required</sup> <a name="additional_flash_cache_percentage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```python
additional_flash_cache_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeouts"></a>

```python
timeouts: DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference">DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `virtual_machine_cluster_count`<sup>Required</sup> <a name="virtual_machine_cluster_count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.virtualMachineClusterCount"></a>

```python
virtual_machine_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermOracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleExascaleDatabaseStorageVaultConfig <a name="DataAzurermOracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermOracleExascaleDatabaseStorageVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#timeouts DataAzurermOracleExascaleDatabaseStorageVault#timeouts}

---

### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage()
```


### DataAzurermOracleExascaleDatabaseStorageVaultTimeouts <a name="DataAzurermOracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#read DataAzurermOracleExascaleDatabaseStorageVault#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#read DataAzurermOracleExascaleDatabaseStorageVault#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">available_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">total_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_in_gb`<sup>Required</sup> <a name="available_size_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```python
available_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gb`<sup>Required</sup> <a name="total_size_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```python
total_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_exascale_database_storage_vault

dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermOracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

---



