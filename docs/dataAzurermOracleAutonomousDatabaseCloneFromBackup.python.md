# `dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackup <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackup" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup(
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
  timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb">actual_used_data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb">allocated_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">allowed_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings">connection_strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">database_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb">in_memory_area_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">local_adg_auto_failover_max_data_loss_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled">local_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb">memory_per_oracle_compute_unit_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp">next_long_term_backup_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds">peer_database_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview">preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted">preview_version_with_service_terms_accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl">private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled">remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl">sql_web_developer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc">time_created_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc">time_data_guard_role_changed_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc">time_deletion_of_free_autonomous_database_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc">time_local_data_guard_enabled_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc">time_maintenance_begin_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc">time_maintenance_end_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc">time_of_last_failover_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc">time_of_last_refresh_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc">time_of_last_refresh_point_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc">time_of_last_switchover_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc">time_reclamation_of_free_autonomous_database_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb">used_data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb">used_data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actual_used_data_storage_size_in_tb`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb"></a>

```python
actual_used_data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_storage_size_in_tb`<sup>Required</sup> <a name="allocated_storage_size_in_tb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb"></a>

```python
allocated_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_ip_addresses`<sup>Required</sup> <a name="allowed_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```python
allowed_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings"></a>

```python
connection_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```python
database_workload: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```python
data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_area_in_gb`<sup>Required</sup> <a name="in_memory_area_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb"></a>

```python
in_memory_area_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit_in_seconds`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit_in_seconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```python
local_adg_auto_failover_max_data_loss_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_data_guard_enabled`<sup>Required</sup> <a name="local_data_guard_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled"></a>

```python
local_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a>

---

##### `memory_per_oracle_compute_unit_in_gb`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb"></a>

```python
memory_per_oracle_compute_unit_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `next_long_term_backup_timestamp`<sup>Required</sup> <a name="next_long_term_backup_timestamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp"></a>

```python
next_long_term_backup_timestamp: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `peer_database_ids`<sup>Required</sup> <a name="peer_database_ids" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds"></a>

```python
peer_database_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview"></a>

```python
preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="preview_version_with_service_terms_accepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted"></a>

```python
preview_version_with_service_terms_accepted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `private_endpoint_url`<sup>Required</sup> <a name="private_endpoint_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl"></a>

```python
private_endpoint_url: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `remote_data_guard_enabled`<sup>Required</sup> <a name="remote_data_guard_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled"></a>

```python
remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `sql_web_developer_url`<sup>Required</sup> <a name="sql_web_developer_url" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl"></a>

```python
sql_web_developer_url: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created_in_utc`<sup>Required</sup> <a name="time_created_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc"></a>

```python
time_created_in_utc: str
```

- *Type:* str

---

##### `time_data_guard_role_changed_in_utc`<sup>Required</sup> <a name="time_data_guard_role_changed_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc"></a>

```python
time_data_guard_role_changed_in_utc: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database_in_utc`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```python
time_deletion_of_free_autonomous_database_in_utc: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled_in_utc`<sup>Required</sup> <a name="time_local_data_guard_enabled_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc"></a>

```python
time_local_data_guard_enabled_in_utc: str
```

- *Type:* str

---

##### `time_maintenance_begin_in_utc`<sup>Required</sup> <a name="time_maintenance_begin_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc"></a>

```python
time_maintenance_begin_in_utc: str
```

- *Type:* str

---

##### `time_maintenance_end_in_utc`<sup>Required</sup> <a name="time_maintenance_end_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc"></a>

```python
time_maintenance_end_in_utc: str
```

- *Type:* str

---

##### `time_of_last_failover_in_utc`<sup>Required</sup> <a name="time_of_last_failover_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc"></a>

```python
time_of_last_failover_in_utc: str
```

- *Type:* str

---

##### `time_of_last_refresh_in_utc`<sup>Required</sup> <a name="time_of_last_refresh_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc"></a>

```python
time_of_last_refresh_in_utc: str
```

- *Type:* str

---

##### `time_of_last_refresh_point_in_utc`<sup>Required</sup> <a name="time_of_last_refresh_point_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc"></a>

```python
time_of_last_refresh_point_in_utc: str
```

- *Type:* str

---

##### `time_of_last_switchover_in_utc`<sup>Required</sup> <a name="time_of_last_switchover_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc"></a>

```python
time_of_last_switchover_in_utc: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `time_reclamation_of_free_autonomous_database_in_utc`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```python
time_reclamation_of_free_autonomous_database_in_utc: str
```

- *Type:* str

---

##### `used_data_storage_size_in_gb`<sup>Required</sup> <a name="used_data_storage_size_in_gb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb"></a>

```python
used_data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tb`<sup>Required</sup> <a name="used_data_storage_size_in_tb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb"></a>

```python
used_data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig(
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
  timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackup#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule()
```


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">time_of_backup_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup_in_utc`<sup>Required</sup> <a name="time_of_backup_in_utc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```python
time_of_backup_in_utc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_autonomous_database_clone_from_backup

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---



